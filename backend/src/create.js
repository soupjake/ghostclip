import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { randomUUID } from "crypto";

const db = new DynamoDBClient();

export const handler = async (event) => {
  const { content } = JSON.parse(event.body);
  const id = randomUUID();
  const ttl = Math.floor(Date.now() / 1000) + 60 * 60 * 24; // 24h

  await db.send(new PutItemCommand({
    TableName: process.env.CLIPS_TABLE,
    Item: {
      id: { S: id },
      content: { S: content },
      ttl: { N: String(ttl) }
    }
  }));

  return {
    statusCode: 200,
    body: JSON.stringify({ id })
  };
};
