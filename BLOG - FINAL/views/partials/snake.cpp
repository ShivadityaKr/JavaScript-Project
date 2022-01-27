#include<iostream>
#include <cstdlib>
#include <ctime>
#include<conio.h>
using namespace std;
string namep1,namep2;
int scorep1=0,scorep2=0;

int check(int score){
	
	switch(score){
		//snake
		case 99: return 7;
		case 90: return 67;
		case 48: return 10;
		case 38: return 20;
		//ladder
		case 3: return 17;
		case 34: return 84;
		case 40: return 62;
		case 74: return 93;
		default: return score;
	}
}
int dice(){
	int value;
	srand(time(0));
	value=rand() % 6 + 1;
	return value;
}
void detail(){
	cout<<"-----------------SNAKE & LADDER GAME-----------------"<<endl<<endl;
	cout<<"SNAKE : 99---> 77 \t\t LADDER : 3---> 17"<<endl;
	cout<<"SNAKE : 90---> 67 \t\t LADDER : 34---> 84"<<endl;
	cout<<"SNAKE : 48---> 10 \t\t LADDER : 40---> 62"<<endl;
	cout<<"SNAKE : 38---> 20 \t\t LADDER : 74---> 93"<<endl;
	cout<<"-----------------------------------------------------"<<endl;
	cout<<"                                                     "<<namep1<<" : "<<scorep1;
	cout<<endl<<"                                                     "<<namep2<<" : "<<scorep2;
	cout<<endl<<"press 1 to roll dice or 0 to quit game";
	
}

void name(){
	cout<<endl<<"Enter Player 1 Name : ";
	cin>>namep1;
	cout<<endl<<"Enter Player 2 Name : ";
	cin>>namep2;
}
int play(string player){
		int current;
		if(player==namep1){
			current=dice();
			scorep1+=check(current);
		}
		else{
			current=dice();
			scorep2+=check(current);
		}
		return current;
		
}
void result(){
	
	if(scorep1>99){
		cout<<namep1<<"  WON";
	}
	else
	{
		cout<<namep2<<"  WON";
	}
}
int main(){
	int ch=1;
	int c=0;
	name();
	while(ch)
	{
		system("CLS");
		if(scorep1 >99 || scorep2 >99)
		{
			result();
			ch=0;	
		}
		else{
			detail();
			if(c%2==0){
				cout<<endl<<namep1<<" Turn : "; cin>>ch;
			}
			else{
				cout<<endl<<namep2<<" Turn : "; cin>>ch;
			}
			
			switch(ch){
				case 1:
					if(c%2==0) {
						cout<<endl<<"DICE : "<<play(namep1);
					}
					else cout<<endl<<"DICE : "<<play(namep2);
					c++;
					break;
				case 0:
					break;
				default:
					cout<<endl<<"Plz Enter Valid option......";
					
			}
			
		getch();
		}
	}	
}