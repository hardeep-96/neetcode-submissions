class MedianFinder {
    constructor() {
        this.maxHeap = new PriorityQueue((a,b) => b-a);
        this.minHeap = new PriorityQueue((a,b) => a-b);
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        if(this.maxHeap.isEmpty() || num < this.maxHeap.front()){
            this.maxHeap.enqueue(num);
        } else {
            this.minHeap.enqueue(num);
        }

        if(this.maxHeap.size() > this.minHeap.size() + 1){
            this.minHeap.enqueue(this.maxHeap.dequeue());
        } else if(this.minHeap.size() > this.maxHeap.size()){
            this.maxHeap.enqueue(this.minHeap.dequeue())
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if(this.maxHeap.size() > this.minHeap.size()){
            return this.maxHeap.front();
        } else {
            return (this.maxHeap.front() + this.minHeap.front())/2;
        }
    }
}
