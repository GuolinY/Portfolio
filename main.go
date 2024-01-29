package main

import (
	"html/template"
	"net/http"
)

type Profile struct {
	Name    string
	Job     string
	Company string
}

const port string = "8000"

func HandleIndex(w http.ResponseWriter, r *http.Request) {
	profile := Profile{
		Name:    "Guolin Yang",
		Job:     "Graduate Software Engineer",
		Company: "TikTok",
	}
	tmpl := template.Must(template.ParseFiles("templates/index.html"))
	tmpl.Execute(w, profile)
}

func main() {
	// Set up handlers
	http.HandleFunc("/", HandleIndex)

	// Serve static files from the "public/static" directory
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("public/static"))))

	http.ListenAndServe(":"+port, nil)
}
