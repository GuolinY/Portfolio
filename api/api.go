package api

import (
	"fmt"
	"path/filepath"

	"github.com/gin-gonic/gin"
)

// Profile represents the profile structure
type Profile struct {
	Name    string `json:"name"`
	Job     string `json:"job"`
	Company string `json:"company"`
}

var User = Profile{
	Name:    "Guolin Yang",
	Job:     "Graduate Software Engineer",
	Company: "TikTok",
}

const apiToken = "your_secret_token"

// StartAPI initializes and starts the API server using Gin
func StartAPI(port int) error {
	r := gin.Default()

	r.Use(authMiddleware)

	// Define your API routes here
	r.PATCH("/profile", profileHandler)
	r.PUT("/cv", cvHandler)

	// Start the server
	addr := fmt.Sprintf(":%d", port)
	fmt.Printf("Server listening on %s\n", addr)
	return r.Run(addr)
}

func authMiddleware(c *gin.Context) {
	token := c.GetHeader("Authorization")

	if token != "Bearer "+apiToken {
		c.JSON(401, gin.H{"error": "Unauthorized"})
		c.Abort()
		return
	}

	c.Next()
}

func cvHandler(c *gin.Context) {
	file, err := c.FormFile("file")
	if err != nil {
		c.JSON(400, gin.H{"error": "Missing or invalid file"})
		return
	}

	// Save the uploaded file to the static folder, always named "CV.pdf"
	err = c.SaveUploadedFile(file, filepath.Join("./static/", "CV.pdf"))
	if err != nil {
		c.JSON(500, gin.H{"error": "Failed to save the file"})
		return
	}

	c.JSON(200, gin.H{"message": "File replaced successfully", "filename": "CV.pdf"})
}

func profileHandler(c *gin.Context) {
	var updatedProfile Profile

	if err := c.ShouldBindJSON(&updatedProfile); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	// Update only non-empty fields
	if updatedProfile.Name != "" {
		User.Name = updatedProfile.Name
	}
	if updatedProfile.Job != "" {
		User.Job = updatedProfile.Job
	}
	if updatedProfile.Company != "" {
		User.Company = updatedProfile.Company
	}

	c.JSON(200, gin.H{"message": "Profile updated successfully", "profile": User})
}
