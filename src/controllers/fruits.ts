import { fruits } from "../data.json";

export const getFruits = () => {
  return {
    message: "Fruits sent successfully",
    data: { fruits },
  };
};

export const getFruit = (req: { params: { name: string } }) => {
  const { name } = req.params;
  const fruit = fruits.find((item: { name: string }) => item.name === name);

  if (fruit) {
    return {
      message: `Fruit ${name} found`,
      data: { fruit },
    };
  } else {
    return { success: false, message: "No fruit found!" };
  }
};

export const addFruit = (req: { body: { fruit: object } }, res: any) => {
  const { fruit } = req.body;

  const item = {
    id: fruits.length,
    ...fruit,
  };

  return { data: { fruit } };
};
