import heapq
from typing import List

class KthLargest:

    def __init__(self, k: int, nums: List[int]):
        # Initialize the class with the given 'k' value and an empty min-heap.
        self.k = k
        self.min_heap = []

        # Initialize the min-heap with the first 'k' elements from 'nums'.
        for num in nums:
            self.add(num)

    def add(self, val: int) -> int:
        # Add the new value 'val' to the min-heap.
        heapq.heappush(self.min_heap, val)

        # If the size of the min-heap exceeds 'k', remove the smallest element.
        if len(self.min_heap) > self.k:
            heapq.heappop(self.min_heap)

        # The Kth largest element is always at the top of the min-heap.
        return self.min_heap[0]