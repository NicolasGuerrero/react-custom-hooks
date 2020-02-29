def print_upper_words(words, must_start_with="e"):
    for word in words:
        if word[0] in must_start_with:
            print(word.upper())

my_words = ["hi", "hello", "red"]

print_upper_words(my_words)
print_upper_words(["earth", "green", "early", "ear", "fan"])
print_upper_words(["hello", "hey", "goodbye", "yo", "yes"],
                   must_start_with={"h", "y"})