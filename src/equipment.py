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

def book_equipment(equipment, time_slot, user):
    filled = False
    if equipment[time_slot] == None:
        equipment[time_slot] = user
        filled = True
    else:
        print("Equipment is already booked for this time slot.")
        while filled == False:
            if equipment[time_slot] == None:
                equipment[time_slot] = user
                filled = True
            time_slot = nextAvailable(time_slot)

def nextAvailable(time_slot):
    #implement this function
    start = time_slot[0]
    end = time_slot[1]
    if start.minute == 30:
        start.minute = 0
        start.hour += 1
    else:
        start.minute = 30
    if end.minute == 30:
        end.minute = 0
        end.hour += 1
    else:
        end.minute = 30
    return time_slot