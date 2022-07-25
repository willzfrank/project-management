const graphql = require("graphql");

const Client = require("../models/ClientSchema");
const Project = require("../models/ProjectSchema");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
} = graphql;

const ClientType = new GraphQLObjectType({
  name: "Client",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

const ProjectType = new GraphQLObjectType({
  name: "Project",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLInt },
    status: { type: GraphQLString },
    client: {
      type: ClientType,
      resolve(parent, args) {
        return Client.findById(parent.clientId);
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Client.findById(args.id);
      },
    },

    project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Project.findById(args.id);
      },
    },

    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parent, args) {
        return Project.find({});
      },
    },

    clients: {
      type: new GraphQLList(ClientType),
      resolve(parent, args) {
        return Client.find({});
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addProject: {
      type: ProjectType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLInt) },
        status: {
          type: new GraphQLEnumType({
            name: "ProjectStatus",
            values: {
              "not-started": { value: "not-started" },
              "in-progress": { value: "in-progress" },
              completed: { value: "completed" },
            },
          }),
          defaultValue: "not-started",
        },
        clientId: { type: new GraphQLNonNull(GraphQLID) },
        // connect to db
        resolve(parent, args) {
          let project = new Project({
            name: args.name,
            description: args.description,
            status: args.status,
            clientId: args.clientId,
          });
          return project.save();
        },
      },

      // delete a project

      deleteProject: {
        type: ProjectType,
        args: { id: { type: new GraphQLNonNull(GraphQLID) } },
        resolve(parent, args) {
          return Project.findByIdAndRemove(args.id);
        },
      },

      // update project
      updateProject: {
        type: ProjectType,
        args: {
          id: { type: new GraphQLNonNull(GraphQLID) },
          name: { type: GraphQLString },
          description: { type: GraphQLInt },
          status: {
            type: new GraphQLenumType({
              name: "ProjectUpdatedStatus",
              values: {
                "not-started": { value: "not-started" },
                "in-progress": { value: "in-progress" },
                completed: { value: "completed" },
              },
            }),
          },
          resolve(parent, args) {
            return Project.findByIdAndUpdate(
              args.id,
              {
                $set: {
                  name: args.name,
                  description: args.description,
                  status: args.status,
                },
              },
              { new: true }
            );
          },
        },
      },

      addClient: {
        type: ClientType,
        args: {
          name: { type: new GraphQLNonNull(GraphQLString) },
          email: { type: new GraphQLNonNull(GraphQLString) },
          phone: { type: new GraphQLNonNull(GraphQLInt) },
        },
        // connect to db
        resolve(parent, args) {
          let client = new Client({
            name: args.name,
            email: args.email,
            phone: args.phone,
          });
          return client.save();
        },
      },
    },

    // delete client

    deleteClient: {
      type: ClientType,
      args: { id: { type: new GraphQLNonNull(GraphQLString) } },
      // connect to db
      resolve(parent, args) {
        // delete project with clientID
        Project.find({ clientId: args.id }).then((projects) => {
          projects.forEach((project) => {
            project.remove();
          });
        });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
