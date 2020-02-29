"""Word Finder: finds random words from a dictionary."""

class WordFinder:
    """ """
    def __init__(self, path):
        self.path = path
        self.lst = []
        self.open_file()

    def __repr__(self):
        return f"Get a random word from {self.path}"

    def open_file(self):
        with open(self.path, "r") as file:
            for line in file:
                self.lst.append(line.splitlines()[0])

        print(f"{len(self.lst)} words read")
    
    def random(self):
        from random import choice
        return (random.choice(self.lst))


class SpecialWordFinder(WordFinder):
    def open_file(self):
        with open(self.path, "r") as file:
            for line in file:
                if not line.startswith("#") and not line.startswith("\n"):
                    self.lst.append(line.splitlines()[0])

        print(f"{len(self.lst)} words read")    
    

