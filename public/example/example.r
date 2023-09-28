square <- function(x) {
  return(x^2)
}

numbers <- 1:5
squared_numbers <- sapply(numbers, square)
cat("Squared Numbers: ", squared_numbers, "\n")

colors <- c("red", "green", "blue")
cat("Colors: ", paste(colors, collapse = ", "), "\n")

data <- data.frame(
  Name = c("John", "Jane", "Bob"),
  Age = c(25, 30, 35),
  City = c("New York", "San Francisco", "Chicago")
)

cat("Data Frame:\n")
print(data)

mean_age <- mean(data$Age)
cat("Mean Age: ", mean_age, "\n")

new_person <- data.frame(Name = "Alice", Age = 28, City = "Los Angeles")
data <- rbind(data, new_person)

cat("Updated Data Frame:\n")
print(data)

filter_older_than <- function(df, age_threshold) {
  return(df[df$Age > age_threshold, , drop = FALSE])
}

filtered_data <- filter_older_than(data, 30)
cat("Filtered Data Frame (older than 30):\n")
print(filtered_data)
