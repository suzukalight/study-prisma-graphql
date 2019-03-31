const { prisma } = require("./generated/prisma-client");
const { GraphQLServer } = require("graphql-yoga");

const resolvers = {
  Query: {
    posts(root, args, context) {
      return context.prisma.posts({});
    },
    post(root, args, context) {
      return context.prisma.post({ id: args.id });
    }
  },
  Mutation: {
    createPost(root, args, context) {
      return {
        post: context.prisma.createPost({
          title: args.input.title,
          content: args.input.content
        })
      };
    },
    updatePost(root, args, context) {
      return {
        post: context.prisma.updatePost({
          data: {
            title: args.input.title,
            content: args.input.content
          },
          where: {
            id: args.input.id
          }
        })
      };
    },
    createComment(root, args, context) {
      return {
        comment: context.prisma.createComment({
          content: args.input.content,
          post: {
            connect: {
              id: args.input.postId
            }
          }
        })
      };
    }
  },
  Post: {
    comments(root, args, context) {
      return context.prisma
        .post({
          id: root.id
        })
        .comments();
    }
  }
};

const server = new GraphQLServer({
  typeDefs: "./schema.graphql",
  resolvers,
  context: {
    prisma
  }
});

const options = {
  port: 3030,
  endpoint: "/graphql"
};

server.start(options, () =>
  console.log(
    `Server is running on http://localhost:${options.port}/${options.endpoint}`
  )
);
