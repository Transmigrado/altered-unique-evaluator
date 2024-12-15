
import { collection, getDocs, query, where } from "firebase/firestore";
import { firebaseFirestore } from "@/lib/firebase";

export const fetchMyCards = async (userId: string) => {
    const q = query(collection(firebaseFirestore!, "MyCards"),  where("userId", "==", userId));
    return await getDocs(q);
}