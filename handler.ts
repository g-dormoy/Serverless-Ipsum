import { Handler, Callback, Context } from 'aws-lambda';

const loremIpsum: any = require("lorem-ipsum");

interface Headers {
  "Content-Type": string;
}

interface Response {
  statusCode: number;
  body: string;
  headers?: Headers;
}

const lorem: Handler = (event: any, context: Context, callback: Callback) => {
  const res: Response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/plain'
    },
    body: loremIpsum()
  };

  callback(undefined, res);
};

export { lorem }
