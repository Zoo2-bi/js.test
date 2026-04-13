import sys
input = sys.stdin.readline

n = int(input())

stack = []
result = []
current = 1

possible = True

for _ in range(n):
    target = int(input())

    # target까지 push
    while current <= target:
        stack.append(current)
        result.append('+')
        current += 1

    # 스택 top 확인
    if stack[-1] == target:
        stack.pop()
        result.append('-')
    else:
        possible = False
        break

# 출력
if not possible:
    print("NO")
else:
    for r in result:
        print(r)