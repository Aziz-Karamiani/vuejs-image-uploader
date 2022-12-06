# vuejs-image-uploader

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
we use imgur to upload images. (https://imgur.com/)


### Run using Docker
```
docker build -t vuejs/vuejs-image-uploader
docker run -it -p 8080:8080 --rm --name vuejs-image-uploader vuejs/vuejs-image-uploader
```