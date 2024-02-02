# Variables
GOCMD=go
GOBUILD=$(GOCMD) build
GOTEST=$(GOCMD) test
GOCLEAN=$(GOCMD) clean
BINARY_NAME=portfolio

# Targets
all: build

dev:
	$(GOCMD) run main.go

build:
	$(GOBUILD) -o $(BINARY_NAME) -v

test:
	$(GOTEST) -v ./...

clean:
	$(GOCLEAN)
	rm -f $(BINARY_NAME)

docker:
	docker run -p 8000:8000 -p 8001:8001 portfolio

.PHONY: all build test clean docker dev