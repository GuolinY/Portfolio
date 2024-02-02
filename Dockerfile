FROM node:18 AS node-builder

WORKDIR /frontend

COPY . .

RUN yarn install
RUN npx tailwindcss -i ./styles.css -o ./static/output.css

FROM golang:1.21 AS go-builder
WORKDIR /backend
COPY . .

COPY go.mod go.sum ./
RUN go mod download && go mod verify
RUN go build -o main .

FROM golang:1.21
WORKDIR /app
COPY --from=node-builder /frontend/static/output.css ./static/

COPY --from=go-builder /backend/main .

COPY ./templates ./templates
COPY ./static ./static

EXPOSE 8000

CMD ["./main"]
