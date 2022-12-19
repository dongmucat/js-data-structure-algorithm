const COLORS = Object.freeze({
	GREEN: "green",
	YELLOW: "yellow",
	RED: "red",
});

function Graph() {
	// 存储顶点
	this.vertexes = new Set();
	// 存储边
	this.edges = new Map();

	/**
	 * 增加顶点
	 * @param {*} v 顶点
	 */
	Graph.prototype.addVertex = function (v) {
		if (!this.edges.has(v)) {
			this.vertexes.add(v);
			this.edges.set(v, []);
		}
	};
	/**
	 * 增加边关系
	 * @param {*} v1 顶点1
	 * @param {*} v2 顶点2
	 * @param {*} directed 是否是双向
	 */
	Graph.prototype.addEdge = function (v1, v2, directed = true) {
		this.edges.get(v1).push(v2);

		if (directed) {
			this.edges.get(v2).push(v1);
		}
	};

	/**
	 * 打印图
	 * @returns 图结构（字符串）
	 */
	Graph.prototype.toString = function () {
		return Array.from(this.vertexes).reduce((res, item) => {
			res += item + "-->";
			let vNeighboursStr = this.edges.get(item)?.join(" ");
			res = res + vNeighboursStr + "\n";
			return res;
		}, "");
	};

	/**
	 * 初始化状态
	 * @returns colors
	 */
	Graph.prototype.initializeColor = function () {
		if (this.vertexes.size === 0) return;

		const colors = {};
		this.vertexes.forEach((item) => (colors[item] = COLORS.GREEN));
		return colors;
	};

	/**
	 * 广度优先遍历
	 * @param {*} fromVertex 起点
	 * @param {*} callback 回调函数
	 */
	Graph.prototype.bfs = function (fromVertex, callback) {
		const colors = this.initializeColor();
		const queue = [fromVertex];

		while (queue.length) {
			const v = queue.shift();
			const vNeighbours = this.edges?.get(v);
			// 开始检查
			colors[v] = COLORS.YELLOW;

			vNeighbours.forEach((item) => {
				if (colors[item] === COLORS.GREEN) {
					colors[item] = COLORS.YELLOW;
					queue.push(item);
				}
			});

			colors[v] = COLORS.RED;

			callback && callback(v);
		}
	};

	/**
	 * 深度优先遍历
	 * @param {*} fromVertex 起点
	 * @param {*} callback 回调函数
	 */
	Graph.prototype.dfs = function (fromVertex, callback) {
		const colors = this.initializeColor();

		this.dfsVisit(fromVertex, colors, callback);
	};

	/**
	 *
	 * @param {*} v 顶点
	 * @param {*} colors 记录访问状态
	 * @param {*} callback 回调函数
	 */
	Graph.prototype.dfsVisit = function (v, colors, callback) {
		colors[v] = COLORS.YELLOW;

		callback && callback(v);

		const vNeighbours = this.edges.get(v);
		for (let i = 0; i < vNeighbours.length; i++) {
			let item = vNeighbours[i];
			//判断相邻顶点是否为白色，若为白色，递归调用函数继续访问
			if (colors[item] === COLORS.GREEN) {
				this.dfsVisit(item, colors, callback);
			}
		}

		colors[v] = COLORS.RED;
	};
}

//测试代码
//1.创建图结构
let graph = new Graph();

//2.添加顶点
let myVertexes = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
for (let i = 0; i < myVertexes.length; i++) {
	graph.addVertex(myVertexes[i]);
}

//3.添加边
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");

//4.输出结果
console.log(graph.toString());

//5.测试bfs遍历方法
let result = "";
graph.bfs(myVertexes[0], function (v) {
	result += v + "-";
});
console.log("bfs", result);

//6.测试dfs遍历顶点

let res = "";
graph.dfs(myVertexes[0], function (v) {
	res += v + "-";
});
console.log("dfs", res);
