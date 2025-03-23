# Rag for Documents

RAG for documents is a project that aims to create a RAG capable of indexing documents starting from a folder and all its subfolders.

At the moment the supported documents are:
- .docx
- .txt
- .pdf

For now the project only works with Pinecone database and open Ai API.


## Usage

Copy the project locally, then create the .env file from the example one.

```
LANGSMITH_TRACING=true
LANGSMITH_ENDPOINT=""
LANGSMITH_API_KEY=""
LANGSMITH_PROJECT=""

OPENAI_API_KEY=""

PINECONE_API_KEY=""

FOLDER_PATH=<Your folder path>
PINECONE_INDEX=<Your Pinecone index name>
```

From terminal index the contents of the folder indicated in the .env file

```
npm run dev:indexing
```

Once the indexing process is finished it starts communicating

```
npm run dev
```

For now it is necessary to empty the pinecone index and re-index the files when some changes are made to the documents.

In order not to consume excessive tokens, since the history is used as context, for each context change in the communication, start a new conversation (ctrl + c -> npm run dev)

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
