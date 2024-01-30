package main

import (
	"html/template"
	"net/http"
	"portfolio/api"
)

const port string = "8000"

func HandleIndex(w http.ResponseWriter, r *http.Request) {
	tmpl := template.Must(template.ParseFiles("templates/index.html"))
	tmpl.Execute(w, api.User)
}

func main() {
	go api.StartAPI(8001)
	// Set up handlers
	http.HandleFunc("/", HandleIndex)
	// Serve static files from the "/static" directory
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))
	http.ListenAndServe(":"+port, nil)
}
