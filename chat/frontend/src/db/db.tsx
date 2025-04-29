import { openDB } from "idb";
import { Message } from "../types/Types";

const DB_NAME = "chat-app";
const STORE_NAME = "messages";

const dbPromise = openDB(DB_NAME, 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains(STORE_NAME)) {
      db.createObjectStore(STORE_NAME, { keyPath: "_id" }); // Use `_id` from the message
    }
  },
});

export const saveMessage = async (message: Message) => {
  const db = await dbPromise;
  await db.put(STORE_NAME, message);
};

export const getMessagesFromDB = async (): Promise<Message[]> => {
  const db = await dbPromise;
  const messages = await db.getAll(STORE_NAME);
  return messages ? messages : []; // Always return an array
};

export const clearMessages = async () => {
  const db = await dbPromise; // Ensure this function is correctly opening IndexedDB
  const tx = db.transaction("messages", "readwrite");
  const store = tx.objectStore("messages");

  await store.clear(); // Ensure this properly clears the store
  await tx.done;

};
