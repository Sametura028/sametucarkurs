import pygame

# Ekran boyutları
SCREEN_WIDTH = 640
SCREEN_HEIGHT = 480

# Renkler (R, G, B)
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)

# Yılan sınıfı
class Snake:
    def __init__(self):
        self.position = [100, 50]
        self.body = [[100, 50], [90, 50], [80, 50]]
        self.direction = "RIGHT"

    # Yılanı hareket ettirin
    def move(self):
        # Yılanın başının yeni konumunu alın
        if self.direction == "RIGHT":
            self.position[0] += 10
        elif self.direction == "LEFT":
            self.position[0] -= 10
        elif self.direction == "UP":
            self.position[1] -= 10
        elif self.direction == "DOWN":
            self.position[1] += 10

        # Yılanın yeni pozisyonunu kontrol edin
        if self.position[0] > SCREEN_WIDTH:
            self.position[0] = 0
        elif self.position[0] < 0:
            self.position[0] = SCREEN_WIDTH
        elif self.position[1] > SCREEN_HEIGHT:
            self.position[1] = 0
        elif self.position[1] < 0:
            self.position[1] = SCREEN_HEIGHT

        # Yılanın yeni pozisyonunu güncelleyin
        self.body.insert(0, list(self.position))
        self.body.pop()

    # Yılanı çizin
    def draw(self, surface):
        for pos in self.body:
            pygame.draw.rect(surface, WHITE, pygame.Rect(pos[0], pos[1], 10, 10))

# Oyun sınıfı
class Game:
    def __init__(self):
        self.snake = Snake()
        self.running = True

    # Oyun döngüsü
    def game_loop(self):
        while self.running:
            # Olayları kontrol edin
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    self.running = False
                elif event.type == pygame.KEYDOWN:
                    if event.key == pygame.K_UP:
                        self.snake.direction = "UP"
                    elif event.key == pygame.K_DOWN:
                        self.snake.direction = "DOWN"
                    elif event.key == pygame.K_LEFT:
                        self.snake.direction = "LEFT"
  