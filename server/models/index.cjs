import mongoose from "mongoose";
import userSchema from "../User.cjs";
import produitSchema from "./Produit.cjs";

const User = mongoose.model("User", userSchema);
const Produit = mongoose.model("Produit", produitSchema);

export default { User, Produit };
