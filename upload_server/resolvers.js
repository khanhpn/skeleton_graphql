import { createWriteStream } from "fs";

export default {
  Query: {
    products: async(_, {}, {dataSources}) => {
      return await dataSources.productAPI.products();
    },
    uploads: async(parent, args) => {},
  },
  Mutation: {
    singleUpload: async(parent, args) => {
      console.log(JSON.stringify(args))
      return args.file[0].then(file => {
        const { stream, filename } = file;
        storeUpload({ stream, filename });
        console.log(filename);
        //Contents of Upload scalar: https://github.com/jaydenseric/graphql-upload#class-graphqlupload
        //file.stream is a node stream that contains the contents of the uploaded file
        //node stream api: https://nodejs.org/api/stream.html
        return file;
      });
    }
  }
}


const storeUpload = ({ stream, filename }) => {
  new Promise((resolve, reject) => {
    stream.pipe(createWriteStream(filename))
      .on("finish", () => resolve())
      .on("error", reject)
  })
}
