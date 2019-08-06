#include <stdio.h>
#include <string.h>

//PARA COMPILAR: gcc teste.cpp -o teste

int main()
{
	char str[] = "- This, a sample string.";
	char * pch;
	printf("Splitting string \"%s\" into tokens:\n", str);
	pch = strtok(str, " ,.-");
	while(pch != NULL)
	{
		printf("%s\n", pch);
		//Passando NULL como a string a ser lida, a função
		//strtok continua lendo a string da primeira chamada
		//até que essa string acabe
		pch = strtok(NULL, " ,.-");
	}
	return 0;
}