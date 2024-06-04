using namespace std;
#include<bits/stdc++.h>
int binary_search(int arr[],int start,int end,int x){
    while(start<=end){
        int mid=start+(end-start)/2;
        if(arr[mid]==x){
            return mid;
        }
        else if(arr[mid]>x){
            end=mid-1;
        }
        else{
            start=mid+1;
        }
    }
    return -1;
}
int main(){
    int arr[]={2,3,4,10,40};
    int x=10;
    int n=sizeof(arr)/sizeof(arr[0]);
    int result=binary_search(arr,0,n-1,x);
    if(result==-1){
        cout<<"Element is not present in array"<<endl;
    }
    cout<<"Element is present at index : "<<result;
    return 0;
}