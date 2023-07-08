#include <unordered_set>

using namespace std;

class Solution {
  public:
    int longest = 0;
    int current = 0;
    unordered_set<char> seen;

    int lengthOfLongestSubstring(string s) {
        for(int i=0; i<s.length(); i++) {
          current = 0;
          seen.clear();
          
          for(int y=i; y<s.length(); y++) {
            if(seen.count(s[y]) > 0) {
              break;
            } else {
              seen.insert(s[y]);
              current++;
            }
          }
          if(current > longest) {
            longest = current;
          }
        }
        return longest;
    }
};