using namespace std;
#include<bits/stdc++.h>
int binary_search(int arr[],int start,int end,int x){
    if(start<=end){
        int mid=start+(end-start)/2;

        if(arr[mid]==x){
            return mid;
        }

        if(arr[mid]>x){
            return binary_search(arr,start,end-1,x);
        }
        return binary_search(arr,start+1,end,x);
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

// TC==O(logn)
// -->best case== O(1)
// SC==O(1)
// -->recursive stack space is considered ==> auxilary stack space ==O(logn)