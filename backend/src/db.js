import { DynamoDBClient } from "@aws-sdk/client-dynamodb"
import {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
  DeleteCommand,
} from "@aws-sdk/lib-dynamodb"

const client = new DynamoDBClient({})
const docClient = DynamoDBDocumentClient.from(client)
const tableName = process.env.TABLE

export const getClip = async (id) => {
  const command = new GetCommand({
    TableName: tableName,
    Item: {
      id,
    },
  })

  const response = await docClient.send(command)
  console.log(response)
  return response
}

export const createClip = async (id, content) => {
  const command = new PutCommand({
    TableName: tableName,
    Item: {
      id,
      content,
    },
  })

  const response = await docClient.send(command)
  console.log(response)
  return response
}

export const deleteClip = async (id, content) => {
  const command = new DeleteCommand({
    TableName: tableName,
    Item: {
      id,
    },
  })

  const response = await docClient.send(command)
  console.log(response)
  return response
}
