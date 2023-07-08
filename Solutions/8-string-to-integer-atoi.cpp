using namespace std;

class Solution {
public:
    int myAtoi(string s) {
        int sign = 1;
        long long output = 0;
        int i = 0;
        while(i < s.length() && s[i] == ' ') {
            i++;
        }
        if(i < s.length() && (s[i] == '+' || s[i] == '-')) {
            sign = (s[i] == '-') ? -1 : 1;
            i++;
        }
        while(i<s.length() && isdigit(s[i])) {
            output = output*10 + (s[i]-'0');
            if(output * sign > INT_MAX) {
                return INT_MAX;
            } else if(output * sign < INT_MIN) {
                return INT_MIN;
            }
            i++;
        }
        return output * sign;
    }
};