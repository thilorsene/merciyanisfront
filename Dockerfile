FROM node:alpine
WORKDIR /merciyanisfront

# add `/app/node_modules/.bin` to $PATH
ENV PATH /merciyanisfront/node_modules/.bin:$PATH
COPY package.json ./

COPY ./ ./
RUN yarn install
CMD ["yarn",  "start"]
