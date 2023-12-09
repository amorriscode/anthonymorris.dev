[[artificial intelligence|AI]] [[neural network]] [[Neural Networks - Zero to Hero]] [[Andrej Karpathy]]

# The spelled-out intro to neural networks and backpropagation: building micrograd

## Resources
- [YouTube video](https://www.youtube.com/watch?v=VMj-3S1tku0)
- [Jupiter notebook - first half](https://github.com/karpathy/nn-zero-to-hero/blob/master/lectures/micrograd/micrograd_lecture_first_half_roughly.ipynb)
- [Jupiter notebook - second half](https://github.com/karpathy/nn-zero-to-hero/blob/master/lectures/micrograd/micrograd_lecture_second_half_roughly.ipynb)
## Notes
- Step by step instructions for building [[micrograd]]
- "[[micrograd]] is all you need to train a [[neural network]], everything else is efficiency"
	- Like [[Nand to Tetris]] but for neural networks?
- The [[backpropagation]] part is only ~100 lines of [[Python]]
- What is a [[derivative]] measuring?
	- If you increase some number ($a$) by some small number ($h$) with what sensitivity does the slope respond?
	- Does the function go up or down? By how much?
- Eventually you get a lot of connected neurons and a loss function
	- The loss measures the accuracy of the neural net
	- We backpropagate with respect to the accuracy, trying to increase it
- Tensors are n-dimensional arrays of scalars
- The tuning of the loss function is a subtle art
	- Too low of a learning rate --> too long to converge
	- Too high of a learning rate --> unstable, loss could explode
- It's common to forget to zero out the grads prior to performing backpropagation