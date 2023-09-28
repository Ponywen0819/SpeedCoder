package main

import (
	"bufio"
	"fmt"
	"os"
	"regexp"
	"strings"
)

func countWords(text string) map[string]int {
	wordCount := make(map[string]int)
	wordRegex := regexp.MustCompile(`\b\w+\b`)

	words := wordRegex.FindAllString(text, -1)
	for _, word := range words {
		wordCount[word]++
	}

	return wordCount
}

func main() {
	fmt.Println("Enter text (Ctrl+D to end input):")

	scanner := bufio.NewScanner(os.Stdin)
	var inputText strings.Builder

	for scanner.Scan() {
		inputText.WriteString(scanner.Text())
		inputText.WriteByte('\n')
	}

	if scanner.Err() != nil {
		fmt.Println("Error reading input:", scanner.Err())
		return
	}

	wordFrequency := countWords(inputText.String())

	fmt.Println("\nWord frequency:")
	for word, count := range wordFrequency {
		fmt.Printf("%s: %d\n", word, count)
	}
}
