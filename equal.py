def equal(arr):
    min_element = min(arr)
    move_counts = []
    for i in range(5):
        move_count  = 0
        for a in arr:
            diff = a - (min_element - i)
            move_count += diff//5
            move_count += (diff%5)//2
            move_count += (diff%5)%2
        move_counts.append(move_count)
    return min(move_counts)

e = equal([10,7,12])
print(e)