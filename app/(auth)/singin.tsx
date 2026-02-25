 import { View, Text, Alert } from 'react-native';
import React, { useState } from 'react';
import { Link, router } from 'expo-router';
import CustomInput from '@/components/CustomInput';
import CustomBtn from '@/components/CustomBtn';
import { signIn } from '@/lib/appwerite';

const SignIn = () => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const submit = async () => {
    const { email, password } = form;

    // Validation
    if (!email || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    setIsSubmitting(true);

    try {
      await signIn({ email, password });

      console.log("User logged in");

      Alert.alert('Success', 'Sign in successfully');

      // ✅ Redirect after login
      router.replace('/cart');

    } catch (error: any) {
      Alert.alert('Error', error.message || 'Login failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View className="gap-5 bg-white rounded-lg p-5 mt-5">

      <CustomInput
        label="Email"
        placeholder="Enter your email"
        value={form.email}
        keyboardType="email-address"
        onChangeText={(text) =>
          setForm((prev) => ({ ...prev, email: text }))
        }
      />

      <CustomInput
        label="Password"
        placeholder="Enter your password"
        value={form.password}
        secureTextEntry
        onChangeText={(text) =>
          setForm((prev) => ({ ...prev, password: text }))
        }
      />

      <CustomBtn
        title="Sign In"
        isLoading={isSubmitting}
        onPress={submit}
      />

      <View className="flex flex-row justify-center mt-5 gap-2">
        <Text>Don't have an account?</Text>
 
        <Link href="/singup" className="text-blue-500">
          Sign Up
        </Link> 
      </View>

    </View>
  );
};

export default SignIn;