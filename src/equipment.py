# We will use hashtables to store the equipment and their available slots. 
# The key is the time slow and the value is the name of reservation if occupied or None if open.
# Time slots are represented by tuples: (Start time, End time) using military time.

class Time(object):
    def __init__(self, hour, minute):
        self.hour = hour
        self.minute = minute

bench_press1 = {(Time(9, 00), Time(9, 30)): "Oscar",
                (Time(9, 30), Time(10, 00)): None,
                (Time(10, 00), Time(10, 30)): "Amelia",
                (Time(10, 30), Time(11, 00)): None,
                (Time(11, 00), Time(11, 30)): "Nathan",
                (Time(11, 30), Time(12, 00)): None,
                (Time(12, 00), Time(12, 30)): "Gary",
                (Time(12, 30), Time(13, 00)): None,}

bench_press2 = {(Time(9, 00), Time(9, 30)): "Peter",
                (Time(9, 30), Time(10, 00)): None,
                (Time(10, 00), Time(10, 30)): "Emily",
                (Time(10, 30), Time(11, 00)): None,
                (Time(11, 00), Time(11, 30)): "Samantha",
                (Time(11, 30), Time(12, 00)): None,
                (Time(12, 00), Time(12, 30)): "Jared",
                (Time(12, 30), Time(13, 00)): None,}