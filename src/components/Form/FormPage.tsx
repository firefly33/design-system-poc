import React from "react";
import Button from "../Button";
import { Input } from "./Input";

export const FormPage: React.FC = () => {

    return (
        <article className="flex flex-col gap-2 px-48 py-6">
            <section className="flex flex-col gap-2 ">
                <label className="text-slate-700">Nom</label>
                <Input name="nom" />
            </section>
            <section>
                <label>Prénom</label>
                <Input name="prenom" />
            </section>
            <section className="flex justify-end">
                <Button variant="primary">Envoyer</Button>
            </section>
        </article>
    )
}