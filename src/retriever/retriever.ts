import {VectorStoreRetriever} from "@langchain/core/vectorstores";
import {OpenAIEmbeddings} from "@langchain/openai";
import {Pinecone} from "@pinecone-database/pinecone";
import {PineconeStore} from "@langchain/pinecone";

export async function createRetriever(): Promise<VectorStoreRetriever> {

    const embeddingLLM = new OpenAIEmbeddings({
        model: 'text-embedding-3-small'
    });

    const pinecone = new Pinecone();

    const pineconeIndexDataOperation = pinecone.index(process.env['PINECONE_INDEX'] as string);

    const vectorStore = await PineconeStore.fromExistingIndex(embeddingLLM, {
        pineconeIndex: pineconeIndexDataOperation as any,
    });

    return vectorStore.asRetriever();
}
