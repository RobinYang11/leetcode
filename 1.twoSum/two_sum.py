# two numbers
def two_sum(nums, target):
    _map = {}
    for index, value in enumerate(nums):
        if (_map.get(target-(target-value)) is not None):
            return [_map.get(target-(target-value)), index]
        _map[target-value] = index


res = two_sum([1, 2, 4, 6, 5], 9)
print(res)
