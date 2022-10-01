import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, View, Image, Text } from 'react-native';

import { styles } from './styles';

interface Member {
    login: string;
    avatar_url: string;
}

export default function pages() {
    const [members, setMembers] = useState<Member[]>([]);

    useEffect(() => {
        axios('https://api.github.com/orgs/rocketseat/members')
            .then(response => {
                setMembers(response.data);
            });
    }, []);

    return (
        <FlatList
            style={styles.container}
            data={members}
            keyExtractor={member => member.login}
            renderItem={({ item: member }) => (
                <View style={styles.member}>
                    <Image style={styles.image} source={{ uri: member.avatar_url }} />
                    <Text>{member.login}</Text>
                </View>
            )}
        />
    );
}