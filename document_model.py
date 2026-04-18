class Document:

    def __init__(self, room_id, content=""):
        self.room_id = room_id
        self.content = content

    def update_content(self, new_content):
        self.content = new_content