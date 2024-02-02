package main

import (
	"net/http"
	"portfolio/api"

	"github.com/gin-gonic/gin"
)

const port string = "8000"

func main() {
	r := gin.Default()
	api.StartAPI(r)
	// Set up handlers

	r.Static("/static", "./static")
	r.LoadHTMLGlob("templates/*")

	r.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", api.User)
	})

	r.Run(":" + port)
}
