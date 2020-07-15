# tetrahedron-4th-vertex
Demonstration of finding the 4th vertex of a tetrahedron given its base and distances to vertex

## Problem definition

Consider a [Tetrahedron](https://mathworld.wolfram.com/Tetrahedron.html) in the regular ![](https://render.githubusercontent.com/render/math?math=0\vec{i}\vec{j}\vec{k}) cartesian space defined by: 

- Points _P_, _Q_ and _R_
- Distances ![](https://render.githubusercontent.com/render/math?math=||\vec{PE}||), ![](https://render.githubusercontent.com/render/math?math=||\vec{QE}||) and ![](https://render.githubusercontent.com/render/math?math=||\vec{RE}||) from the respectives points _P_, _Q_ and _R_ to the unknown 4th vertex _E_

The problem consists on finding the (_x_, _y_, _z_) coordinates of the point _E_.

<img src="imgs/simple-tetrahedron.png">

## Solution

Although there are other solutions using intersections of spheres or planes, this problem can be solved by regular trigonometric approach. 

<img src="imgs/projection-on-plane.png">

Note that θ is the angle between the unknow vector ![](https://render.githubusercontent.com/render/math?math=\vec{PE}) and the plane defined by the points _P_, _Q_ and _R_. σ is the angle between the projection of ![](https://render.githubusercontent.com/render/math?math=\vec{PE}) on the same plane _PQR_ and the vector ![](https://render.githubusercontent.com/render/math?math=\vec{PR}).

As the image suggests, σ and θ can be obtained in a straightforward way from the tetrahedron height and elementary trigonometric properties, as shown below.

## Finding ![](https://render.githubusercontent.com/render/math?math=\vec{PE}) angles σ and θ

1) Find the tetrahedron _Volume_ using [Calyer-Menger determinant](https://mathworld.wolfram.com/Cayley-MengerDeterminant.html):

<a href="https://www.codecogs.com/eqnedit.php?latex=288&space;Volume^2&space;=&space;\left|\begin{matrix}0&space;&&space;1&space;&&space;1&space;&&space;1&space;&&space;1\cr&space;1&space;&&space;0&space;&&space;||\vec{RE}||^{2}&space;&&space;||\vec{PE}||^{2}&space;&&space;||\vec{QE}||^{2}\cr&space;1&space;&&space;||\vec{RE}||^{2}&space;&&space;0&space;&&space;\tilde||\vec{QE}||^{2}&space;&&space;\tilde||\vec{PE}||^{2}\cr&space;1&space;&&space;||\vec{PE}||^{2}&space;&&space;\tilde||\vec{QE}||^{2}&space;&&space;0&space;&&space;\tilde||\vec{RE}||^{2}\cr&space;1&space;&&space;||\vec{QE}||^{2}&space;&&space;\tilde||\vec{PE}||^{2}&space;&&space;\tilde||\vec{RE}||^{2}&space;&&space;0\end{matrix}\right|" target="_blank"><img src="https://latex.codecogs.com/gif.latex?288&space;Volume^2&space;=&space;\left|\begin{matrix}0&space;&&space;1&space;&&space;1&space;&&space;1&space;&&space;1\cr&space;1&space;&&space;0&space;&&space;||\vec{RE}||^{2}&space;&&space;||\vec{PE}||^{2}&space;&&space;||\vec{QE}||^{2}\cr&space;1&space;&&space;||\vec{RE}||^{2}&space;&&space;0&space;&&space;\tilde||\vec{QE}||^{2}&space;&&space;\tilde||\vec{PE}||^{2}\cr&space;1&space;&&space;||\vec{PE}||^{2}&space;&&space;\tilde||\vec{QE}||^{2}&space;&&space;0&space;&&space;\tilde||\vec{RE}||^{2}\cr&space;1&space;&&space;||\vec{QE}||^{2}&space;&&space;\tilde||\vec{PE}||^{2}&space;&&space;\tilde||\vec{RE}||^{2}&space;&&space;0\end{matrix}\right|" title="288 Volume^2 = \left|\begin{matrix}0 & 1 & 1 & 1 & 1\cr 1 & 0 & ||\vec{RE}||^{2} & ||\vec{PE}||^{2} & ||\vec{QE}||^{2}\cr 1 & ||\vec{RE}||^{2} & 0 & \tilde||\vec{QE}||^{2} & \tilde||\vec{PE}||^{2}\cr 1 & ||\vec{PE}||^{2} & \tilde||\vec{QE}||^{2} & 0 & \tilde||\vec{RE}||^{2}\cr 1 & ||\vec{QE}||^{2} & \tilde||\vec{PE}||^{2} & \tilde||\vec{RE}||^{2} & 0\end{matrix}\right|" /></a>

2) Find the _Area_ of triangle _P_, _Q_, _R_ using [Heron's formula](https://mathworld.wolfram.com/HeronsFormula.html):

![Area using Heron's formula](https://render.githubusercontent.com/render/math?math=Area=\frac{1}{4}\sqrt{4||\vec{PE}||^2||\vec{QE}||^2-(||\vec{PE}||^2+||\vec{QE}||^2-||\vec{RE}||^2)^2})

3) Find the tetrahedron height _H_ using the relationship between _Volume_ and _Area_:

<a href="https://www.codecogs.com/eqnedit.php?latex=H=\frac{3\times&space;Volume}{Area}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?H=\frac{3\times&space;Volume}{Area}" title="H=\frac{3\times Volume}{Area}" /></a>

4) Find θ:

![obtaining theta from height](https://render.githubusercontent.com/render/math?math=\theta=arcsin\left(\frac{H}{||\vec{PE}||}\right))

Once we have θ the next step is to find the length of the projections ![](https://render.githubusercontent.com/render/math?math=\vec{PE'}) and ![](https://render.githubusercontent.com/render/math?math=\vec{RE'}) onto the plane defined by _P_, _Q_ and _R_:

<img src="imgs/projections-on-plane.png"/>

![](https://render.githubusercontent.com/render/math?math=||\vec{PE'}||=\sqrt{||\vec{PE}||^2-H^2})

![](https://render.githubusercontent.com/render/math?math=||\vec{RE'}||=\sqrt{||\vec{RE}||^2-H^2})

5) Thus, using the [Law of Cosines](https://mathworld.wolfram.com/LawofCosines.html), σ is given by:

<a href="https://www.codecogs.com/eqnedit.php?latex=\sigma&space;=&space;arccos\left&space;(\frac{||\vec{PE'}||^2&space;-&space;||\vec{RE'}||^2&space;&plus;&space;||\vec{PR}||^2}{2&space;||\vec{PE'}||&space;\times&space;||\vec{PR}||}\right&space;)" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\sigma&space;=&space;arccos\left&space;(\frac{||\vec{PE'}||^2&space;-&space;||\vec{RE'}||^2&space;&plus;&space;||\vec{PR}||^2}{2&space;||\vec{PE'}||&space;\times&space;||\vec{PR}||}\right&space;)" title="\sigma = arccos\left (\frac{||\vec{PE'}||^2 - ||\vec{RE'}||^2 + ||\vec{PR}||^2}{2 ||\vec{PE'}|| \times ||\vec{PR}||}\right )" /></a>

Once we have _P_, ![](https://render.githubusercontent.com/render/math?math=||\vec{PE}||), σ and θ we know everything we need to find _E_.

## Finding _E_ given σ, θ, _P_ and ![](https://render.githubusercontent.com/render/math?math=||\vec{PE}||)

There are several ways to obtain _E_(_x_, _y_, _z_), one of them is rotating ![](https://render.githubusercontent.com/render/math?math=\vec{PR}) by σ and then rotating again by θ, as demonstrated below.

1) Find the _PQR_ triangle normal ![](https://render.githubusercontent.com/render/math?math=\vec{n}):

<a href="https://www.codecogs.com/eqnedit.php?latex=\vec{n}&space;=&space;\frac{\vec{PR}\times\vec{PQ}}{||\vec{PR}||&space;\times&space;||\vec{PQ}||}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\vec{n}&space;=&space;\frac{\vec{PR}\times\vec{PQ}}{||\vec{PR}||&space;\times&space;||\vec{PQ}||}" title="\vec{n} = \frac{\vec{PR}\times\vec{PQ}}{||\vec{PR}|| \times ||\vec{PQ}||}" /></a>

2) Rotate ![](https://render.githubusercontent.com/render/math?math=\vec{PR}) about ![](https://render.githubusercontent.com/render/math?math=\vec{n}) by -σ using [Rodrigues' formula](https://mathworld.wolfram.com/RodriguesRotationFormula.html):

<a href="https://www.codecogs.com/eqnedit.php?latex=\vec{PE'}&space;=&space;\vec{PR}cos(-\sigma)&space;&plus;&space;(\vec{n}&space;\times&space;\vec{PR})\sin(-\sigma)&space;&plus;&space;\vec{n}(\vec{n}&space;\cdot&space;\vec{PR})&space;(1&space;-&space;cos(-\sigma))" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\vec{PE'}&space;=&space;\vec{PR}cos(-\sigma)&space;&plus;&space;(\vec{n}&space;\times&space;\vec{PR})\sin(-\sigma)&space;&plus;&space;\vec{n}(\vec{n}&space;\cdot&space;\vec{PR})&space;(1&space;-&space;cos(-\sigma))" title="\vec{PE'} = \vec{PR}cos(-\sigma) + (\vec{n} \times \vec{PR})\sin(-\sigma) + \vec{n}(\vec{n} \cdot \vec{PR}) (1 - cos(-\sigma))" /></a>

3) Find the normal ![](https://render.githubusercontent.com/render/math?math=\vec{m}) from ![](https://render.githubusercontent.com/render/math?math=\vec{PE'}) and ![](https://render.githubusercontent.com/render/math?math=\vec{n}):

<a href="https://www.codecogs.com/eqnedit.php?latex=\vec{m}&space;=&space;\frac{\vec{PE'}\times\vec{n}}{||\vec{PE'}||&space;\times&space;||\vec{n}||}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\vec{m}&space;=&space;\frac{\vec{PE'}\times\vec{n}}{||\vec{PE'}||&space;\times&space;||\vec{n}||}" title="\vec{m} = \frac{\vec{PE'}\times\vec{n}}{||\vec{PE'}|| \times ||\vec{n}||}" /></a>

4) Rotate ![](https://render.githubusercontent.com/render/math?math=\vec{PE'}) by -θ about ![](https://render.githubusercontent.com/render/math?math=\vec{m}):

<a href="https://www.codecogs.com/eqnedit.php?latex=\vec{PE_{dir}}&space;=&space;\vec{PE'}cos(-\theta)&space;&plus;&space;(\vec{m}&space;\times&space;\vec{PE'})\sin(-\theta)&space;&plus;&space;\vec{m}(\vec{m}&space;\cdot&space;\vec{PE'})&space;(1&space;-&space;cos(-\theta))" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\vec{PE_{dir}}&space;=&space;\vec{PE'}cos(-\theta)&space;&plus;&space;(\vec{m}&space;\times&space;\vec{PE'})\sin(-\theta)&space;&plus;&space;\vec{m}(\vec{m}&space;\cdot&space;\vec{PE'})&space;(1&space;-&space;cos(-\theta))" title="\vec{PE_{dir}} = \vec{PE'}cos(-\theta) + (\vec{m} \times \vec{PE'})\sin(-\theta) + \vec{m}(\vec{m} \cdot \vec{PE'}) (1 - cos(-\theta))" /></a>

5) Get the unit vector from ![](https://render.githubusercontent.com/render/math?math=\vec{PE_{dir}}) and multiply it by ![](https://render.githubusercontent.com/render/math?math=||\vec{PE}||) in order to obtain ![](https://render.githubusercontent.com/render/math?math=\vec{PE}):

<a href="https://www.codecogs.com/eqnedit.php?latex=\vec{PE}&space;=&space;\frac{\vec{PE_{dir}}}{||\vec{PE_{dir}}||}&space;\times&space;||\vec{PE}||" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\vec{PE}&space;=&space;\frac{\vec{PE_{dir}}}{||\vec{PE_{dir}}||}&space;\times&space;||\vec{PE}||" title="\vec{PE} = \frac{\vec{PE_{dir}}}{||\vec{PE_{dir}}||} \times ||\vec{PE}||" /></a>

Finally, _E_ is given by

<a href="https://www.codecogs.com/eqnedit.php?latex=E&space;=&space;\vec{PE}&space;&plus;&space;P" target="_blank"><img src="https://latex.codecogs.com/gif.latex?E&space;=&space;\vec{PE}&space;&plus;&space;P" title="E = \vec{PE} + P" /></a>

It is noteworthy that the symmetric solution ![](https://render.githubusercontent.com/render/math?math=E_2) can be find by rotating ![](https://render.githubusercontent.com/render/math?math=\vec{PE'}) about ![](https://render.githubusercontent.com/render/math?math=\vec{m}) by +θ (instead of -θ):

<img src="imgs/solution-2.png">

## Different approaches

This same problem can be solved by finding the intersection of the 3 spheres centered on _P_, _Q_ and _R_ and respective radius ![](https://render.githubusercontent.com/render/math?math=||\vec{PE}||), ![](https://render.githubusercontent.com/render/math?math=||\vec{QE}||) and ![](https://render.githubusercontent.com/render/math?math=||\vec{RE}||).

Another approach is by finding the intersection of planes _PER_, _PQE_ and _REQ_.

## Future work

One of my future work is checking out if this approach is less computational intensive than others.

## Acknowledgements

I would like to thanks to github markup team for not provide a simple way to write math expressions on markdown documents. Thus, in order to provide the formulas I ended up using this formula image generator: https://www.codecogs.com/latex/eqneditor.php. For more details see https://github.com/github/markup/issues/897.