import { Factory } from "fishery";
import { name, image, datatype, lorem } from "faker";

const factoryRobots = Factory.define(({ sequence }) => ({
  id: sequence,
  name: name.firstName(),
  imageSource: image.imageUrl(),
  features: {
    speed: datatype.number({ min: 0, max: 10 }),
    endurance: datatype.number({ min: 0, max: 10 }),
    creationDate: lorem.word,
    isItCute: datatype.boolean(),
  },
}));

export const getRandomRobot = () => factoryRobots.build();
export const getRandomRobots = (total = 5) => factoryRobots.buildList(total);
