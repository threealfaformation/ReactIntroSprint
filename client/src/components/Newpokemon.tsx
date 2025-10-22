import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import type { Trainer, Zone } from "../Types";
const Newpokemon: React.FC = () => {
  const [trainers, setTrainers] = useState<Trainer[]>([]);
  const [zones, setZones] = useState<Zone[]>([]);

  const nav = useNavigate();
  const pokemonSchema = z.object({
    name: z.string().min(4),
    imageUrl: z.string().url(),
    level: z.number().min(1),
    types: z.enum(["fire", "water", "earth"]),
    trainer: z.string(),
    zone: z.string(),
  });

  type Pokemonform = z.infer<typeof pokemonSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Pokemonform>({
    resolver: zodResolver(pokemonSchema),
  });
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/trainer/getdata`)
      .then((response) => {
        console.log(response.data, "response data");
        setTrainers(response.data.trainers);
        setZones(response.data.zones);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const addPokemon = (data: Pokemonform) => {
    axios
      .post("http://localhost:3000/api/pokemon", data)
      .then((response) => {
        console.log("hello");

        console.log(response, "data added");
        nav("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(addPokemon)}>
        <div>
          <input type="text" {...register("name")} placeholder="name" />
          <input
            type="number"
            {...register("level", { valueAsNumber: true })}
            placeholder="level"
          />
          {errors.level && <p>{errors.level.message} </p>}
          <input type="url" {...register("imageUrl")} placeholder="imageUrl" />
        </div>
        <div>
          <select {...register("types")}>
            <option value=""> type </option>
            <option value="fire"> fire</option>
            <option value="water"> water</option>
            <option value="earth"> earth</option>
          </select>
        </div>
        <div>
          <select {...register("trainer")}>
            <option value=""> select trainer </option>
            {trainers.map((t: Trainer) => (
              <option key={t._id} value={t._id}>
                {t.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <select {...register("zone")}>
            <option value="">select zone</option>
            {zones.map((z: Zone) => (
              <option key={z._id} value={z._id}>
                {z.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit"> add pokemon </button>
      </form>
    </>
  );
};

export default Newpokemon;
