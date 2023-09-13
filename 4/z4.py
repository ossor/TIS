n = int(input())
queue = []
for i in range(n):
    op = input().split()
    if op[0] == 'WORRY':
        queue[int(op[1])] = 1
    elif op[0] == 'QUIET':
        queue[int(op[1])] = 0
    elif op[0] == 'COME':
        k = int(op[1])
        if k > 0:
            queue += [0] * k
        else:
            queue = queue[:k]
    else:
        print(queue.count(1))