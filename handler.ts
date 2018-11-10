import { Handler, Callback, Context } from 'aws-lambda';

const loremIpsum: any = require("lorem-ipsum");

interface Response {
  statusCode: number;
  body: string;
}

const lorem: Handler = (event: any, context: Context, callback: Callback) => {
  const res: Response = {
    statusCode: 200,
    body: JSON.stringify({
      message: loremIpsum()
    })
  };

  callback(undefined, res);
};

export { lorem }
