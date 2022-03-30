import prisma from './prisma.js';

class Url {
  #Url;

  constructor(model) {
    this.#Url = model;
  }

  async create({ url, expireAt }) {
    const res = await this.#Url.create({
      data: {
        originalUrl: url,
        expireAt,
      },
    });

    return res;
  }

  async findOne({ id }) {
    const res = await this.#Url.findFirst({
      where: {
        id,
      },
    });

    return res;
  }
}

const urlRepository = new Url(prisma.url);

export default urlRepository;
