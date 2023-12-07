package main

import "fmt"

func Plus(x, y int) int {
	return x + y
}

func main() {
	i := Plus(1, 2)
	fmt.Println(i)

	if b := 100; b == 100 {
		fmt.Println("correct")
	}

	arr := [3]int{1,2,3}
	for i,v := range arr {
		fmt.Println(i, v)
	}

}