import heapq
from typing import List

class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:

        # We are negating values because python has only min_heaps
        max_heap = [-stone for stone in stones]
        heapq.heapify(max_heap)

        while len(max_heap) > 1:
            # Getting first two stones
            first = -heapq.heappop(max_heap)
            second = -heapq.heappop(max_heap)

            if first != second:
                # If they are not equal, add the difference back to the max heap
                heapq.heappush(max_heap, -(first - second))

        return -max_heap[0] if max_heap else 0